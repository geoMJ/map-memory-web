import { ReactNode } from "react"

interface ContainerProps {
    children?: ReactNode | undefined;
    className?: string | undefined;
}
const Container = ({children, className}:ContainerProps) => {
    return <div className={"container px-4 md:px-6 mx-auto" + (className ? " " + className : "")}>{children}</div>
}

export default Container;