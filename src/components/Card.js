import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useState, useEffect } from "react";


const Card = ({ product }) => {
    console.log(product)

    const { id, nombre, tipo, precio, image, info, bgColor, colorPrecio, bgColorBoton } = product;
    const imagenes = require.context("../assets/images", true);


    const handelModalContainerClick = (e) => e.stopPropagation();


    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)


    useEffect(() => {
        if (isOpen === true) {
            document.body.style.overflow = 'hidden'
        } else if (isOpen === false) {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <>
            <CardContainer onClick={openModal}>
                <CardFigcaption >
                    <Favorito>
                        <svg>
                            <path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z" ></path>
                        </svg>
                    </Favorito>
                    <img src={imagenes(`./${image}`)} alt={tipo} style={{ width: '100%' }} />
                    <Nombre>{nombre}</Nombre>
                    <Tipo>{tipo}</Tipo>
                    <PrecioS>$ <Precio>{precio}</Precio></PrecioS>
                </CardFigcaption>
            </CardContainer>
            {isOpen &&
                <ModalArticle onClick={closeModal}>
                    <ModalContainer key={id} bgColor={bgColor} onClick={handelModalContainerClick}>
                        <ModalClose onClick={closeModal}>X</ModalClose>
                        <Img src={imagenes(`./${image}`)} alt={tipo} />
                        <Nombre>{nombre}</Nombre>
                        <Tipo>{tipo}</Tipo>
                        <PrecioModS colorPrecio={colorPrecio} >$ <Precio>{precio}</Precio></PrecioModS>
                        <Info>{info}</Info>
                        <Button bgColorBoton={bgColorBoton} product={product}></Button>
                    </ModalContainer>
                </ModalArticle>
            }
        </>
    )
}
export default Card


/**** Styles Container ****/
const CardContainer = styled.figure`
    width:26rem;
    height:45rem;
    border: 0.15rem solid var(--orange);
    box-sizing: border-box;
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    border-radius:1rem;
    overflow:hidden;
    margin:3rem;
    padding-top: 1rem;
    padding-bottom:4rem;
    box-shadow:rgba(0, 0, 0, 0.3) 6px 8px 5px;
    cursor: pointer;
    `

/**** Styles Cards ****/
const CardFigcaption = styled.figcaption`
position: relative;
top:-20px;
width:100%;
height: 35rem;
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;
padding-bottom: 0.1rem;

&:hover svg{
    fill: var(--orange);
}
`
const Favorito = styled.div`
    fill: transparent;
    cursor: pointer;
    height: 45px;
    width: 45px;
    padding-top: 10px;
    position: relative;
    left: 100px;
    top: 30px;
    z-index: 30;
    transition: all 300ms;

    &:active {
        transform: scale(1.25, 1.25);
        transition: transform .2s;
    }
`
const Nombre = styled.h3`
    padding-top: 25px;
    color: var(--dark);
    font-family: 'Carter One', cursive;
    font-size: 21px;
`
const Tipo = styled.p`
    color: var(--dark);
    font-family:'Satisfy', cursive;
    font-size: 18px;
    font-weight: 200;
`
const PrecioS = styled.p`
    color: var(--orange);
    font-family: 'Righteous', cursive;
    font-size: 15px;
    display: flex;
    align-items: center;
    position: relative;
    top: -10px;
`

const Precio = styled.p`
    font-weight: 600;
    font-size: 28px;
    padding-top: 5px;
`


/**** Styles Modal *****/
const ModalArticle = styled.article`
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: var(--dark35);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div`
    position: relative;
    background-color: white;
    box-sizing: content-box;
    width: 35rem;
    height: 83vh;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.15rem solid var(--orange);
    border-radius: 1rem;
    justify-content: space-evenly;
    background-color: ${props => props.bgColor};
`

const ModalClose = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--beige);
    border-radius: 5px;
    border-color: var(--orange75);
    color: var(--orange75);
    font-weight: bold;
`
const Img = styled.img`
    width: 250px;
`
const PrecioModS = styled.p`
    color: ${props => props.colorPrecio};
    font-family: 'Righteous', cursive;
    font-size: 15px;
    display: flex;
    align-items: center;
    position: relative;
    top: -10px;
`
const Info = styled.p`
    position: relative;
    top: -30px;
    font-size: 16px;
    font-family: 'Satisfy', cursive;
    margin: 0px 30px;
`