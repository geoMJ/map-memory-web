import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

// This is a very simple multipurpose type of card
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <Card>
            <CardHeader>
                {icon}
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
