import { Navigation } from "../../components/Navigation"
import { XoComponent } from "../../components/XoComponent/XoComponent"

export const XoPage = () => {
    return (
        <div className="x-o-page">
            <h1>X-O Page</h1>
            <Navigation/>
            <XoComponent/>
        </div>
    )
}