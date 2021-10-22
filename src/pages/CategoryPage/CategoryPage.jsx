import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard } from "../../components/ProductCard/ProductCard";
import './CategoryPage.scss';

class CategoryPage extends Component {
    render() {
        const { products, categoryName} = this.props;
        return (
            <section className="category-page">
                <h2 className="category-page__title">
                    {categoryName}
                </h2>
                <div className="category-page__products">
                    { products.map((product) => {
                        return (<ProductCard key={product.id} product={product}/>);
                    })}
                </div>
            </section>
        );
    }
}

const mapStageToProps = (state) => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStageToProps)(CategoryPage);