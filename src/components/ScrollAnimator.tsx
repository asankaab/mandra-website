'use client';
import { animate, AnimationParams, createScope, stagger, TargetsParam, utils } from 'animejs';
import { useEffect, useRef } from 'react';

interface PropTypes {
  children: React.ReactNode,
  animation: AnimationParams,
  target: TargetsParam,
  stagg?: [number, number],
  autoplay?: boolean,
  duration?: number
}

export default function ScrollAnimator({ 
  children, animation, target, 
  stagg = [0, 600] as [number, number], autoplay = false, duration = 600 
}: PropTypes ) {

  const root = useRef(null);
  const scope = useRef<{ revert: () => void } | null>(null);

  useEffect(() => {

    const [ container ] = utils.$('.scroll-container');
  
    scope.current = createScope({ root }).add( scope => {

      animation.delay = stagger(stagg);
      animation.autoplay = autoplay;
      animation.duration = duration;

      animate(target, animation);

    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    }

  }, []);

  return (
    <div ref={root}>
      {children}
    </div>
  )
}