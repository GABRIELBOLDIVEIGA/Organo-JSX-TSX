export default function CampoData(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} />
        </div>
    );
}
