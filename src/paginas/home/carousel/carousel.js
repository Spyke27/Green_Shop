import React, {Fragment} from 'react';
import { watch } from 'fs';
import '../carousel/carousel.css';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
];

const ProductCard = () => {
  
  return(
    <Fragment>

      <section>

        <div className='row'>

          <Carousel breakPoints={breakPoints}>


          {/* produto 3 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://meioambiente.culturamix.com/blog/wp-content/gallery/exemplos-de-produtos-reciclaveis-no-cotidiano-1/exemplos-de-produtos-reciclaveis-no-cotidiano-1-3.jpg"}></img></a>

            </div>

            <div className='title'>

                <h6>
                Cadeira
                </h6>

            </div>

            <div className='price'>

              <span> Assento de Papelão  </span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 4 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"http://www.mixlar.com.br/blog/wp-content/uploads/2014/01/Decora%C3%A7%C3%A3o-com-materiais-reciclaveis-fotos1.jpg"}></img></a>

            </div>

            <div className='title'>

                <h6>Decoração</h6>

            </div>

            <div className='price'>

              <span>Pneus Coloridos Decorativos</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 5 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh_xi_YXzjyjYPZtFblDHibAvuDbF4LGn4Q&usqp=CAU"}></img></a>

            </div>

            <div className='title'>

                <h6>Cadeira</h6>

            </div>

            <div className='price'>

              <span>Feita de Tecidos Reutilizados</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 6 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://www.2quartos.com/y/1177/reciclado-sala-e1478526078492-600.webp"}></img></a>

            </div>

            <div className='title'>

                <h6>Decoração</h6>

            </div>

            <div className='price'>

              <span>Estante de Madeira Reciclada</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 7 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://catracalivre.com.br/wp-content/uploads/2019/01/tambores-de-oleo-reciclados-5-910x606.jpg"}></img></a>

            </div>

            <div className='title'>

                <h6>Mini Bar</h6>

            </div>

            <div className='price'>

              <span>Porta Bebidas Feito de Latão</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 7 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://materiaincognita.com.br/wp-content/uploads/2016/01/peixe-mobile.jpg"}></img></a>

            </div>

            <div className='title'>

                <h6>Decoração</h6>

            </div>

            <div className='price'>

              <span>Peixe Voador Feito de Latinhas</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          </Carousel>

        </div>

      </section>

    </Fragment>
  )
}

export default ProductCard
