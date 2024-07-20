import React from 'react';
import { Input, Flex, Button } from 'antd';
interface AntInputProps {
    type?: string;
    placeholder?: string;
    prefix?: React.ReactNode;
    size?: "small" | "middle" | "large";
    style?: any
}

const AntInput: React.FC<AntInputProps> = (props) => {
    return (
        <div>

            <Input
                size={props.size}
                placeholder={props.placeholder}
                prefix={props.prefix}
                type={props.type}
                style={props.style}
            />
            <Button >
                Tất cả địa điểm
            </Button>
        </div>

    );
};

export default AntInput;