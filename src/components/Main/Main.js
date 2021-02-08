// Компонент отображения основного контента сайта.
import React from 'react'
import { connect } from 'react-redux'
import { FitnessCenter } from './FitnessCenter/FitnessCenter.js'
import { fetchFitnessCenters } from '../../apiRequests.js'
import { handleSuccessQuery } from '../../actions/mainActions.js'
import {Helmet} from "react-helmet";
import ym from 'react-yandex-metrika';
import css from './main.module.css'


class Main extends React.Component {

    render() {
        const f = this.props.fitness_centers;
        let fitness_centers_template;
        if(f.length > 0){
            fitness_centers_template = f.map( (center, i) =>{
                return  <FitnessCenter key = {center.name + i}
                                       preview = {center.preview}
                                       name = {center.name}
                                       site = {center.site}
                                       description = {center.description}
                                       addr_array = {center.address_array}/>
            });
        }

        return (
            <div className = {css.wrapper}>
               <Helmet>
                    <title>Список фитнес центров Калуги</title>
                    <meta name="description" content="На данной странице перечеслены все
                                                      фитнесс центры Калуги. Зайти на сайт понравившегося клуба легко.
                                                      Указаны ссылки на адреса в яндекс картах а также телефоны."/>
               </Helmet>
               <h1> Фитнес в Калуге </h1>
               {fitness_centers_template}
            </div>
        )
    }


    async componentDidMount(){
        ym('hit', '/');
        try{
            const response = await fetchFitnessCenters();
            const data = await response.json();
            this.props.handleSuccessQuery(data);  
        } catch(err) {
            alert(err);
        }
    }


}




const mapStateToProps = state => {
    return {
        fitness_centers: state.main.fitness_centers
    }
}


const mapDispatchToProps = dispatch => {
    return {
        handleSuccessQuery: d => dispatch(handleSuccessQuery(d))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)