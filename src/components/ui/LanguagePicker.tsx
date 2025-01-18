import { Popover, PopoverTrigger, PopoverContent, Button, Link } from "@heroui/react";

type DropDownProps = {
    text: string;
    children: React.JSX.Element;
};

const LanguagePicker = ({ lang, children }: DropDownProps) => {
    return (
        <Popover placement="bottom">
            <PopoverTrigger>
                <Button
                    className="text-sm/6 font-semibold text-gray-900"
                >
                    {lang}
                </Button>
            </PopoverTrigger>
            <PopoverContent>{children}</PopoverContent>
        </Popover>
    );
};

export default LanguagePicker;
