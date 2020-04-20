import React from "react";
import Loader from "Components/Loader";
import styled from "styled-components";


const Container = styled.div`
    margin-top:5px;
    background-color:white;
    padding:10px;
`

const Production = styled.div`
    display:inline-block;
    margin-right:0 20px;
`
const CI = styled.img`
    width:200px;
    height:auto;
    color:white;
    margin-right:20px;
`
const Name = styled.p`
    color:black;
    text-align:center;
    margin:10px 0;
`

const ProductionPresenter = ({result, loading}) => (
    <>
        {loading ? <Loader/> : (
            <Container>
                {console.log(result.production_companies)}
                {result.production_companies.map(company => (company.logo_path ?
                    <Production key={company.id}>
                        <CI src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`} alt=""/>
                        <Name>{company.name}</Name>
                    </Production>
                    : ""
                ))}
            </Container>
        )}
    </>
)

export default ProductionPresenter;