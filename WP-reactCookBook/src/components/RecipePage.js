import { useParams } from "react-router"
import LoadingSkeleton from './LoadingSkeleton';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import PhotosCarousel from './PhotosCarousel';
import useContentful  from '../hooks/useContentful';
import ErrorPage from "./ErrorPage";

export default function RecipePage() {
    const {recipeId}=useParams();
    const {loading, error, data} = useContentful({contentType:'recipePage',id:recipeId});

    const RICHTEXT_OPTIONS={
      renderNode:{
        [BLOCKS.PARAGRAPH]:(node,children)=>{
          return <p>{children}</p>
        }
      }
    }

    if (loading || !data) return <LoadingSkeleton page="rec" />
    if (error)return <ErrorPage errText={error} />
    
    return (
      <div className="col-md-12 bg-light text-dark p-2" >
        <div className="row"> 
          <div className="col-md-6 d-flex flex-wrap">
            {data.fields.photos ? <PhotosCarousel photosArray={data.fields.photos} /> : <img src="/images/noimg.jpg" className="d-block w-100" alt="Unavalible"/>}
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="row">
              <h4>{data.fields.name}</h4>
              <h5>{data.fields.description}</h5>
            </div>
          </div>
        </div>
  
        <div className="row mt-2">
          <div className="col ms-5 me-5 d-flex flex-wrap">
            <ul>
                {data.fields.ingredients.map((item,index)=><li key={`ingr${index}`}>{item}</li>)}
            </ul>
          </div>
          <div className="col-md-6">
            {documentToReactComponents(data.fields.instruction,RICHTEXT_OPTIONS)}
          </div>
        </div>
      </div>
    )
}