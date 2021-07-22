import RecipeCard from './RecipeCard';
import { useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import useContentful  from '../hooks/useContentful';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorPage from "./ErrorPage";

export default function Recipes() {

    const [curPage,setCurPage]=useState(0);
    const itemsPerPage=6
    const {loading, error, data} = useContentful({skip:curPage*itemsPerPage,contentType:'allRecs',limit:itemsPerPage});

    const useStyles = makeStyles(() => ({
        ul: {
          "& .MuiPaginationItem-root": {
            color: "#fff"
          }
        }
      }));
      const classes = useStyles();

    if (loading || !data) return <LoadingSkeleton page="lib" />
    if (error)return <ErrorPage errText={error} />

    return (
        <div className="col bg-dark px-5">
            <div className="row mt-3">
                {data.items.map(item=>(
                    <RecipeCard 
                    key={item.sys.id}
                    id={item.sys.id}
                    name={item.fields.name}
                    description={item.fields.description}
                    photo={item.photo ? item.photo.url : '/images/noimg.jpg'}
                    date={item.fields.dateAdded}
                    />
                ))}
            </div>
            <div className="row mt-4">
                <div className="col d-flex justify-content-center">
                    <Pagination classes={{ ul: classes.ul }} color='primary' page={curPage+1} count={Math.ceil(data.total/itemsPerPage)} onChange={(e,page)=>setCurPage(page-1)} size="large" variant="outlined" shape="rounded"  />
                </div>
            </div>
        </div>
    )
}

/* {store.getState().value.items.map(item=>( */