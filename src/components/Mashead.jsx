import GapanIcon from '../assets/gapan-icon.png'
import BpLogo from '../assets/bp-logo.png'

const Mashead = () => {
    return (
        <div className="container mt-3">
            <div className="row header">
                <div className="col-md-9">
                    <img className="masthead" src={GapanIcon} alt="gapan_logo" />
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <img className="bp-logo" src={BpLogo} width={130} height={130} alt="bp-logo" />
                </div>
            </div>
        </div>
    )
}

export default Mashead