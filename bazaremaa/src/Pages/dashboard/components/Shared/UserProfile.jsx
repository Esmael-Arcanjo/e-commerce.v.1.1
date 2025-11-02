import React from "react";
import { useOutletContext } from "react-router-dom";

const Perfil = () => {
  const { profile, setProfile } = useOutletContext();

  const handleSave = () => {
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <div className="absolute top-16 left-64 right-0 bottom-0 bg-gray-50 dark:bg-gray-950 flex justify-center items-center transition-all">
      <div className="w-[90%] max-w-5xl bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-10 overflow-y-auto max-h-[calc(100vh-6rem)]">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-10 text-center">
          Meu Perfil
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-8 mb-10 border-b border-gray-200 dark:border-gray-800 pb-8">
          <img
            src={profile.foto}
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {profile.nome}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{profile.cargo}</p>
            <button
              onClick={() => {
                const newFoto = prompt("Insira a URL da nova foto:", profile.foto);
                if (newFoto) setProfile({ ...profile, foto: newFoto });
              }}
              className="mt-4 px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-200"
            >
              Alterar foto
            </button>
          </div>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              value={profile.nome}
              onChange={(e) => setProfile({ ...profile, nome: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              Cargo
            </label>
            <input
              type="text"
              value={profile.cargo}
              onChange={(e) => setProfile({ ...profile, cargo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </form>

        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow transition"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
