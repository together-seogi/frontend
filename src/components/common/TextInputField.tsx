import styled from "styled-components";
import Colors from "../../consts/Colors";
import IconButton from "./IconButton";

const TextInputFieldContainer = styled.div`
    flex-direction: row;

    background-color: ${Colors.Gray0};
`;

interface TextInputFieldProps {
    placeholder: string,
    font: string,
    size: number,
    color: Colors,
    letterSpacing?: number,
    lineHeight?: number,
    buttonSrc: string,
    buttonOnclick: () => void,
};

const TextInputField = ({
    placeholder, font, size, color, letterSpacing = 0.8, lineHeight = 1.2, buttonSrc, buttonOnclick
}: TextInputFieldProps) => {
    const style = {
        fontFamily: font,
        fontSize: size,
        color: color,
        letterSpacing: letterSpacing,
        lineHeight: lineHeight
    };

    return (
        <TextInputFieldContainer>
            <input
                type="text"
                placeholder={placeholder}
            />
            <IconButton
                src={buttonSrc}
                size={size + 4}
                onclick={buttonOnclick}
            />
        </TextInputFieldContainer>
    );
};

export default TextInputField;