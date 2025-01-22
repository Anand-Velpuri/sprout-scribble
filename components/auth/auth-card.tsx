import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Socials from "@/components/auth/socials";
import {BackButton} from "@/components/auth/back-button";
import Link from "next/link";

type CardWrapperProps = {
    children: React.ReactNode;
    cardTitle: string;
    backButtonHref: string;
    backButtonLabel: string;
    showSocials?: boolean;
};

export const AuthCard = ({
    children,
    cardTitle,
    backButtonHref,
    backButtonLabel,
    showSocials,
}: CardWrapperProps) => {
    return(
        <Card>
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>

            {showSocials && (
                <CardFooter>
                    <Socials />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}