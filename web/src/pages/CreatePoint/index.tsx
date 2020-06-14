import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import './styles.css';
import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="eColeta" />
                <Link to="/">
                    <span>
                        < FiArrowLeft />
                    </span>
                    Voltar para a Home
                </Link>
            </header>
            <form>
                <h1>Cadastro do<br />Ponto de Coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" />
                        </div>
                    </div>

                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>
                    <Map center={[-23.5797743, -46.7709992]} zoom={15}>
                        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-23.5797743, -46.7709992]} />
                    </Map>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado</label>
                            <select name="uf" id="uf">
                                <option value="">Selecione uma UF</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="">Selecione uma Cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Itens de Coleta</h2>
                        <span>Selecione os itens aceitados abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        <li><img src="http://localhost:3333/uploads/baterias.svg" alt="Baterias" /><span>Baterias</span></li>
                        <li><img src="http://localhost:3333/uploads/eletronicos.svg" alt="Pilhas e Eletrônicos" /><span>Pilhas e Eletrônicos</span></li>
                        <li><img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas" /><span>Lâmpadas</span></li>
                        <li><img src="http://localhost:3333/uploads/oleo.svg" alt="Óleo de Cozinha" /><span>Óleo de Cozinha</span></li>
                        <li><img src="http://localhost:3333/uploads/organicos.svg" alt="Orgânicos" /><span>Orgânicos</span></li>
                        <li className="selected"><img src="http://localhost:3333/uploads/papeis-papelao.svg" alt="Papéis e Papelão" /><span>Papéis e Papelão</span></li>
                    </ul>
                </fieldset>
            </form>
        </div>
    );
};

export default CreatePoint;