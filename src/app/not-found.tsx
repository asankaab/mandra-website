import Heading1 from "@/components/ui/Heading1";
import Heading2 from "@/components/ui/Heading2";

export default function NotFound() {
    return (
        <div className="wrapper">
            <div className="flex-container">
                <div>
                    <Heading1>Error!</Heading1>
                    <Heading2 bold>404</Heading2>
                    <Heading2>The page you have requested is not found!</Heading2>
                </div>
            </div>
        </div>
    )
}