import { Button, Link } from "@heroui/react";

const ButtonUI = ({ asLink, ...props }) => {
    return <Button {...props} as={asLink ? Link : null} />;
};

export default ButtonUI;
