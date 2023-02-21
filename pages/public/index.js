import CMS from "../../components/CMS/CMS"

export default function Public() {
    const [str,setStr] = useState()
    return (
        <>
            <input type="text" value={str} />
            <CMS name="this is *anish* from *salem*" age={12} />
        </>
    )
}