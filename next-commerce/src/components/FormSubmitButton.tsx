"use client"

import React, { useState, ComponentProps } from "react";

type FormSubmitButtonProps = {
    children: React.ReactNode;
    className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
    children,
    className,
    ...props
}: FormSubmitButtonProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsSubmitting(true);
    };

    return (
        <button
            {...props}
            className={`btn btn-primary ${className}`}
            type="submit"
            onClick={handleClick}
            // disabled={isSubmitting}
        >
            {isSubmitting ? (
                <span className="loading loading-ring loading-lg"></span>
            ) : (
                children
            )}
        </button>
    );
}
