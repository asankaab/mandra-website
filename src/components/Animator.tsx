'use client';
import { animate, AnimationParams, createScope, onScroll, stagger, TargetsParam, utils } from 'animejs';
import { useEffect, useRef } from 'react';

interface PropTypes {
  children: React.ReactNode,
  animation: AnimationParams,
  target?: TargetsParam,
  stagg?: [number, number],
  autoplay?: boolean | 'scroll',
  duration?: number
}

export default function Animator({ 
  children, animation, target='.anim', 
  stagg = [0, 600], autoplay = false, duration = 600 
}: PropTypes ) {

  const root = useRef(null);
  const scope = useRef<{ revert: () => void } | null>(null);

  useEffect(() => {
  
    const [ container ] = utils.$('.scroll-container');

    scope.current = createScope({ root }).add( scope => {

      animation.delay = stagger(stagg);
      animation.autoplay = autoplay === 'scroll' ? onScroll({container}) : autoplay;
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