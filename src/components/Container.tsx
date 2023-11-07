// 여기서 use client를 쓰는 이유는??
"use client";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <div>{children}</div>
        </div>
    );
};

export default Container;
