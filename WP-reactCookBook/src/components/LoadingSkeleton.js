import { Skeleton } from '@material-ui/lab';

export default function LoadingSkeleton(props) {
    switch (props.page){
        case "lib":
            return (
                <>
                <div className="col bg-dark px-5 ">
                    <div className="row mt-3">
                        <Skeleton variant="rect" height={118} />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </div>
                </div>
                <div className="col bg-dark px-5 ">
                    <div className="row mt-3">
                        <Skeleton variant="rect" height={118} />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </div>
                </div>
                <div className="col bg-dark px-5 ">
                    <div className="row mt-3">
                        <Skeleton variant="rect" height={118} />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </div>
                </div>
                </>
            )
        case "rec":
            return (
                <>
                <div className="col-md-12 bg-light text-dark" >
                    <div className="row"> 
                    <div className="col-md-6 d-flex flex-wrap">
                            <Skeleton variant="rect" height={300} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="ms-5 me-5 mx-auto">
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        </p>
                    </div>
                    </div>
            
                    <div className="row">
                    <div className="col ms-5 me-5 d-flex flex-wrap">
                        <ul>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </div>
                    </div>
                </div>
                </>
            )
        default:
            return <><Skeleton variant="text" /></>
    }

}