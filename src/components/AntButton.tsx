import React from 'react';
import { Button, Flex } from 'antd';
interface AntButtonProps {
    type?: "primary" | "dashed" | "link" | "text" | "default";
    text?: string;
    icon?: React.ReactNode;
    size?: "small" | "middle" | "large";
    style?: any;
    iconPosition?: "start" | "end";
}

const AntButton: React.FC<AntButtonProps> = (props) => {
    return (
        <Button
            type={props.type || "default"}
            icon={props.icon}
            size={props.size}
            style={props.style}
            iconPosition={props.iconPosition}
        >
            {props.text}
        </Button>
    );
};

export default AntButton;