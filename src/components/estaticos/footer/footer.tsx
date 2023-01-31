import React, { useState } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './footer.css';
import { Link } from 'react-router-dom';
import { isConstructorDeclaration } from 'typescript';
import { render } from '@testing-library/react';

function Footer() {

    /* button hidden */


    return (
        <>

            <div className='footer-container'>

                <div className='footer1'>

                    <section>

                        <p className='footer-descricao'>ENTRE EM CONTATO</p>

                        <input className='form-input' name='email' type='email' placeholder='Email' />
                        <input className='form-input' name='email' type='text' placeholder='Mensagem' />

                        <button className='form-btn'>Enviar</button>

                    </section>

                </div>

                <div className='footer-link-wrapper'>
               
                    <div className='footer-link-items'>

                        <h2>POLÍTICAS</h2>
                        
                        <Link className='politicas' to='/'>Políticas de Segurança</Link>
                        <Link className='politicas' to='/'>Políticas de Privacidade</Link>
                        <Link className='politicas' to='/'>Políticas de Entrega</Link>
                        <Link className='politicas' to='/'>Políticas de Pagamentos</Link>
                        <Link className='politicas' to='/'>Políticas de Devoluções</Link>
                
                    </div>

                    <div className='footer-link-items'>

                        <h2>PAGAMENTO</h2>

                        <div className='Pagamentos'>

                            <div className='pagamento'>
                                <Link to=''><img src='https://cf.shopee.com.br/file/a65c5d1c5e556c6197f8fbd607482372' /></Link>
                            </div>

                            <div className='pagamento'>
                                <Link to=''><img src='https://cf.shopee.com.br/file/95d849253f75d5e6e6b867af4f7c65aa' /></Link>
                            </div>

                            <div className='pagamento'>
                                <Link to=''><img src='https://cf.shopee.com.br/file/44734b7fc343eb46237c2d90c6c9ca60' /></Link>
                            </div>

                            <div className='pagamento'>
                                <Link to=''><img src='https://cf.shopee.com.br/file/2a2cfeb34b00ef7b3be23ea516dcd1c5' /></Link>
                            </div>

                        </div>

                    </div>

                    <div className='footer-link-items'>

                        <h2>Redes Sociais</h2>

                        <ul className='icones'>
                            <li><a href='#'><img src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png' width={60}height={50}></img></a></li>
                            <li><a href='#'><img src='https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png8.png?resize=640%2C640&ssl=1' width={90}height={90}></img></a></li>
                            <li><a href='#'><img src='https://www.rafaelglavam.com.br/wp-content/uploads/2020/03/5491159-youtube-png-icons-and-youtube-logo-png-transparent-images-free-youtube-logopng-360_360_preview.png' width={90}height={90}></img></a></li>
                            <li><a href='#'><img src='https://storage.builderall.com//franquias/2/6473541/editor-html/7353384.png' width={80}height={80}></img></a></li>
                        </ul>
                       
                    </div>

                </div>

                <div className='end'>GreenShop © 2022</div>

            </div>

        </>
    )
}

export default Footer;