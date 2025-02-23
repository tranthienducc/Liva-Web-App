import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type GlobalCardType = {
  title: string;
  description: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

const GlobalCard = ({
  children,
  description,
  title,
  footer,
}: GlobalCardType) => {
  return (
    <Card className="bg-transparent">
      <CardHeader className="p-[0.9rem]">
        <CardTitle className="text-md text-[#9d9d9d]">{title}</CardTitle>
        <CardDescription className="text-[#707070]">
          {description}
        </CardDescription>
      </CardHeader>
      {children && <div className="px-4 pb-4">{children}</div>}
      {footer && <CardFooter className="pt-4">{footer}</CardFooter>}
    </Card>
  );
};

export default GlobalCard;
