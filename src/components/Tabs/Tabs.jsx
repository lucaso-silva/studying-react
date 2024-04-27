export default function Tabs({children, buttons, WrapperContainer}) {
    return (
        <>
            <WrapperContainer>
                {buttons}
            </WrapperContainer>
            {children}
        </>
    )
}