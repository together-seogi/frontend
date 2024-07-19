import Colors from "../../consts/Colors";
import SkeletonLoadingView from "./SkeletonLoadingView";

interface TextLoadingViewProps {
    text: string | undefined,
    font: string,
    size: number,
    color: Colors,
    length?: number,
    letterSpacing?: number,
    lineHeight?: number
};

const TextLoadingView = ({
    text, font, size, color, length = 8, letterSpacing = 0.8, lineHeight = 1.2
}: TextLoadingViewProps) => {
    const style = {
        fontFamily: font,
        fontSize: size,
        color: color,
        letterSpacing: letterSpacing,
        lineHeight: lineHeight
    };

    return (
        text ? (
            <div style={style}>{text}</div>
        ) : (
            <SkeletonLoadingView
                width={`${size * length}px`}
                height={`${size + 4}px`}
                radius="4px"
            />
        )
    );
};

export default TextLoadingView;