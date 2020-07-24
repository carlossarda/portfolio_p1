import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const slides = [
    {
      titulo: "Sacada Gourmet",
      mensagem: "Florianópolis - SC 3,0m²",
      mainImg: require('@/assets/projeto_01/cena-02.png'),
      imagens: [
        {
          endereco: require('@/assets/projeto_01/cena-02.png')
        },
        {
          endereco: require('@/assets/projeto_01/cena-03.png')
        },
        {
          endereco: require('@/assets/projeto_01/cena-04.png')
        }
      ]
    },
    {
      titulo: "Suíte Casal MC",
      mensagem: "Palhoça - SC 12,0m²",
      mainImg: require('@/assets/projeto_02/suite-00.png'),
      imagens: [
        {
          endereco: require('@/assets/projeto_02/suite-00.png')
        },
        {
          endereco: require('@/assets/projeto_02/suite-01.png')
        },
        {
          endereco: require('@/assets/projeto_02/suite-02.png')
        },
        {
          endereco: require('@/assets/projeto_02/suite-03.png')
        },
        {
          endereco: require('@/assets/projeto_02/suite-04.png')
        }
      ]
    },
    {
      titulo: "Living NR",
      mensagem: "Bela Vista - SC 10,0m²",
      mainImg: require('@/assets/projeto_03/cena-01.png'),
      imagens: [
        {
          endereco: require('@/assets/projeto_03/cena-01.png')
        },
        {
          endereco: require('@/assets/projeto_03/cena-02.png')
        },
        {
          endereco: require('@/assets/projeto_03/cena-04.png')
        },
        {
          endereco: require('@/assets/projeto_03/cena-06.png')
        },
        {
          endereco: require('@/assets/projeto_03/cena-07.png')
        }
      ]
    },
    {
      titulo: "Suíte NR",
      mensagem: "Bela Vista - SC 10,0m²",
      mainImg: require('@/assets/projeto_04/imagem-01.png'),
      imagens: [
        {
          endereco: require('@/assets/projeto_04/imagem-01.png')
        },
        {
          endereco: require('@/assets/projeto_04/imagem-02.png')
        },
        {
          endereco: require('@/assets/projeto_04/imagem-03.png')
        },
        {
          endereco: require('@/assets/projeto_04/imagem-04.png')
        },
        {
          endereco: require('@/assets/projeto_04/imagem-05.png')
        },
        {
          endereco: require('@/assets/projeto_04/imagem-06.png')
        },
        {
          endereco: require('@/assets/projeto_04/imagem-07.png')
        }
      ]
    }
  ];

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      slides: slides
    }
  },
  {
    path: '/projetos',
    name: 'Projetos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projetos" */ '../views/Projetos.vue'),
    props: {
      slides: slides
    }
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import(/* webpackChunkName: "clientes" */ '../views/Clientes.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import(/* webpackChunkName: "contato" */ '../views/Contato.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
