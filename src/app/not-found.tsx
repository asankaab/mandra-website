import Heading2 from "@/components/ui/Heading2";
import Paragraph from "@/components/ui/Paragraph";

export default function NotFound() {
    return (
        <div className="wrapper">
            <div className="flex-container">
                <div>
                    <Heading2 bold>404 EROR!</Heading2>
                    <Paragraph>The page you have requested is not found!</Paragraph>
                </div>
            </div>
        </div>
    )
}