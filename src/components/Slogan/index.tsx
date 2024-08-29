type sloganProps = {
    text: string,
}

export const Slogan = (props: sloganProps) => {
    return (
        <div>
            <p>
                {props.text}
            </p>
        </div>
    )
}