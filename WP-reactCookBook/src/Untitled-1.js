import { store } from './rdxstore/store';
import RecipeCard from './RecipeCard';
import { ctflClient } from './Ctfl';
import { useEffect, useCallback, useState } from 'react';
import useContentful  from './hooks/useContentful';
import LoadingSkeleton from './LoadingSkeleton';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

export default function Recipes() {
    const {loading, error, data} = useContentful()
    const [pagesInfo,setPagesInfo]=useState({total:0,perPage:3});
    const [curPage,setCurPage]=useState(0);

    const useStyles = makeStyles(() => ({
        ul: {
          "& .MuiPaginationItem-root": {
            color: "#fff"
          }
        }
      }));
      const classes = useStyles();


    if (loading) return <LoadingSkeleton page="lib" />

    return (
        <div className="col bg-dark px-5">
            hello
            <div className="row mt-3">
                {store.getState().value.items.map(item=>(
                    <RecipeCard 
                    key={item.sys.id}
                    id={item.sys.id}
                    name={item.fields.name}
                    description={item.fields.description}
                    photo={item.fields.photos ? item.fields.photos[0].fields.file.url : '/images/noimg.jpg'}
                    alt={item.fields.photos ? item.fields.photos[0].fields.title : 'No photo avalible'}
                    date={item.fields.dateAdded}
                    />
                ))}
            </div>
            <div className="row mt-4">
                <div className="col d-flex justify-content-center">
                    <Pagination classes={{ ul: classes.ul }} color='primary' page={curPage+1} count={pagesInfo.total} onChange={(e,page)=>setCurPage(page-1)} size="large" variant="outlined" shape="rounded"  />
                </div>
            </div> 
        </div>
    )
}