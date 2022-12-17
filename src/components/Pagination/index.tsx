// node_modules
import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

//type props
type Props = {
    allPagesCount: number,
    changePage: (page: number ) => void;
}


const PaginationComponent : React.FC<Props> = ({ allPagesCount, changePage }) => {

    const [ currentPage, setCurrentPage ] = useState<number>(1);
    const moveFirstPage = () => {
        setCurrentPage(1)
    }

    const moveLastPage = () => {
        setCurrentPage(allPagesCount);
    }

    const movePrevPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const moveNextPage = () => {
        setCurrentPage(currentPage + 1 )
    }

    useEffect(() => {
        changePage(currentPage);
    }, [changePage, currentPage]);

    useEffect(() => {
        if ( currentPage > allPagesCount ) {
            setCurrentPage(allPagesCount ? allPagesCount : 1);
        }
    }, [allPagesCount, setCurrentPage, currentPage]);

    const inputValidate = (value: string) => {
        const regex = /^[0-9\b]+$/;
        const regexTest = regex.test(value);
        if (regexTest) {
            let newPage = parseInt(value, 10);
            if (newPage < 1) {
                newPage = 1;
            } else if (newPage > allPagesCount) {
                newPage = allPagesCount;
            }
            setCurrentPage(newPage);
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Button borderRadius="none" disabled={currentPage <= 1} mr="1" onClick={moveFirstPage}>
                First
            </Button>
            <Button borderRadius="none" disabled={currentPage <= 1} mr="1" onClick={movePrevPage}>
                Prev
            </Button>
            <Input borderRadius="none" mr="1" width="70px" textAlign="center" value={currentPage} onChange={(e) => inputValidate(e.target.value)}></Input>
            <Button borderRadius="none" disabled={currentPage >= allPagesCount} mr="1" onClick={moveNextPage}>
                Next
            </Button>
            <Button borderRadius="none" mr="1" disabled={currentPage >= allPagesCount} onClick={moveLastPage}>
                Last
            </Button>
        </Box>
    );
}

export default PaginationComponent;