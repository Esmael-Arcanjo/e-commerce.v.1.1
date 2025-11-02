import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 mt-12 py-10">
            <div className="container mx-auto px-4">
                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                    {/* Navegação */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                            Navegação
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Produtos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Consórcio</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Transportadora</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Roupas íntimas</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Investimento</a></li>
                        </ul>
                    </div>

                    {/* Suporte */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                            Suporte
                        </h4>
                        <ul className="space-y-3 text-sm mb-6">
                            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Rastrear Pedido</a></li>
                        </ul>

                        {/* Segurança */}
                        <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                            Segurança
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <img
                                src="src/assets/icons/d6139b6b-ea33-4478-94d7-cf766a360166.jpg"
                                alt="Google Site Seguro"
                                className="w-24 h-auto"
                            />
                        </div>
                    </div>

                    {/* Contato + Pagamento */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                            Entre em Contato
                        </h4>
                        <ul className="space-y-3 text-sm mb-6">
                            <li className="flex items-center space-x-2">
                                <span>grupoemaas@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"></path>
                                </svg>
                            </li>
                            <li className="text-sm">Av. Principal, 123 - Centro, SP</li>
                        </ul>

                        {/* Pagamento */}
                        <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                            Pagamento
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <img src="src/assets/icons/paypal-svgrepo-com.svg" alt="Elo" className="w-10 h-auto" />
                            <img src="src/assets/icons/visa-svgrepo-com.svg" alt="Visa" className="w-10 h-auto" />
                            <img src="src/assets/icons/maestro-svgrepo-com.svg" alt="MasterCard" className="w-10 h-auto" />
                            <img src="src/assets/icons/hiper-svgrepo-com.svg" alt="Hipercard" className="w-10 h-auto" />
                            <img src="src/assets/icons/unionpay-svgrepo-com.svg" alt="Amex" className="w-10 h-auto" />
                        </div>
                    </div>

                    {/* Fique Conectado */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                            Fique Conectado
                        </h4>
                        <p className="text-sm mb-4">Receba nossas promoções exclusivas.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="p-3 text-sm w-full rounded-l-lg border-none text-white bg-gray-700 focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-r-lg font-semibold transition-colors"
                            >
                                OK
                            </button>
                        </form>

                        {/* Redes sociais */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://facebook.com" target="_blank" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" className="p-2 bg-black rounded-full hover:bg-gray-800 transition">
                                <FaTiktok size={18} />
                            </a>
                            <a href="https://wa.me/5511999999999" target="_blank" className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition">
                                <FaWhatsapp size={18} />
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} BAZAR, Loja de Produtos. Todos os direitos reservados.</p>
                    <p className="mt-1">
                        Grupo Emaa. Compras podem ser canceladas em caso de suspeita de fraude. O valor total de sua compra
                        poderá ser alterado devido a produtos de peso variável. Preços e condições válidos somente hoje.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
