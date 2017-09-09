import Vue from 'vue'
import Router from 'vue-router'

import Vidio from "@/components/Aamuse/Aamusevue/Aamusevidio"
import Game from "@/components/Aamuse/Aamusevue/Aamusegame"
import Music from "@/components/Aamuse/Aamusevue/Aamusemusic"
import Book from "@/components/Aamuse/Aamusevue/Aamusebook"
import Delivery from '../components/Aamuse/three_router/delivery'
import AmuseDetails from '../components/Aamuse/three_router/details'
import gameDelivery from '../components/Aamuse/three_router/gameDelivery'
import gameDetails from '../components/Aamuse/three_router/gameDetails'
import musicDetails from '../components/Aamuse/three_router/musicDetails'
import musicDelivery from '../components/Aamuse/three_router/musicDelivery'
import movieDelivery from '../components/Aamuse/three_router/movieDelivery'
import movieDetails from '../components/Aamuse/three_router/movieDetails'

import Topic from "../components/index/view/topic"
import CirIndex from "../components/Circle/view/cirIndex"
import Aamuse from "../components/Aamuse/Aamusevue/AamuseIndex"
import Indexs from "../components/My/MyView/index"
import MyHome from "../components/My/MyView/MyHome"
import Dynamic from "../components/My/MyView/myrouter/dynamic"
import Photo from "../components/My/MyView/myrouter/photo"
import Looks from "../components/My/MyView/myrouter/looks"
import Fans from "../components/My/MyView/myrouter/fans"
import Msg from "../components/My/MyView/msg"
import Myshoucang from "../components/My/MyView/myshoucang"
import Mymon from "../components/My/MyView/money/mymoney"
import Mydan from "../components/My/MyView/mydingdan/mydingdan"
import Myshezhi from "../components/My/MyView/shezhi/myshezhi"
import Pinglun from "../components/My/MyView/mymessage/pinglun"
import Myinter from "../components/My/MyView/inter/myinter"
import Myuser from "../components/My/MyView/user/myusers"
import Myblock from "../components/My/MyView/blocks/myblock"

import Tongzhi from "../components/My/MyView/mymessage/tongzhi"
import Sixin from "../components/My/MyView/mymessage/sixin"

import CirRecomment from "../components/Circle/view/CirRouter/cirRecomment"
import CirClass from "../components/Circle/view/CirRouter/cirClass"
import CirJoin from "../components/Circle/view/CirRouter/cirJoin"
import CirCreate from "../components/Circle/view/CirRouter/cirCreate"
import CirToCreate from "../components/Circle/view/CirRouter/Cirdetails/cirToCreate"
import CirMyCir from "../components/Circle/view/CirRouter/Cirdetails/cirMyCir"
import CirToWrite from "../components/Circle/view/CirRouter/Cirdetails/cirToWrite"



import Advice from "../components//index/view/next/t_advice"
import Export from "../components//index/view/next/t_expert"
import Sift from "../components//index/view/next/t_sift"
import Slot from "../components//index/view/next/t_slot"

import Adtopic from '../components//index/view/next/more/Adtopic'
import Slo from '../components//index/view/next/more/slot'
import exp from '../components//index/view/next/more/expert'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: "Topic",
      component: Topic,
      redirect: "/t_advice",
      children: [
        {
          path: 't_advice',
          name: "Advice",
          component: Advice
        },
        {
          path: 't_expert',
          name: "Export",
          component: Export
        },
        {
          path: 't_sift',
          name: "Sift",
          component: Sift
        },
        {
          path: 't_slot',
          name: "Slot",
          component: Slot
        }
      ]
    },
    {
      path: '/cir',
      name: "CirIndex",
      component: CirIndex,
      redirect: "/cir/recom",
      children: [
        {
          path: 'recom',
          name: "CirRecomment",
          component: CirRecomment
        },
        {
          path: 'class',
          name: "CirClass",
          component: CirClass
        },
        {
          path: 'join',
          name: "CirJoin",
          component: CirJoin
        },
        {
          path: 'create',
          name: "CirCreate",
          component: CirCreate
        },
      ]
    },
    {
      path: '/my',
      name: "Indexs",
      component: Indexs
    },
    {
      path: '/my/myhome',
      name: "MyHome",
      component: MyHome,
      redirect: '/my/myhome/dynamic',
      children: [
        {
          path: 'dynamic',
          name: "Dynamic",
          component: Dynamic
        },
        {
          path: 'photo',
          name: "Photo",
          component: Photo
        },
        {
          path: 'looks',
          name: "Looks",
          component: Looks
        },
        {
          path: 'fans',
          name: "Fans",
          component: Fans
        }
      ]
    },
    {
      path: '/amuse',
      name: "Aamuse",
      component: Aamuse,
      redirect: "/amuse/vidio",
      children: [
        {
          path: 'book',
          name: 'Book',
          component: Book
        },
        {
          path: 'music',
          name: 'Music',
          component: Music
        },
        {
          path: 'game',
          name: 'Game',
          component: Game
        },
        {
          path: 'vidio',
          name: 'Vidio',
          component: Vidio
        }
      ]
    },
    {
      path: '/amuse/book/delivery',
      name: "Delivery ",
      component: Delivery
    },
    {
      path: '/t_advice/adtopic',
      name: "Adtopic",
      component: Adtopic
    },
    {

      path: '/cir/create/to',
      name: "CirToCreate",
      component: CirToCreate
    },
    {
      path: '/t_slot/slot',
      name: "Slo",
      component: Slo

    },
    {
      path: '/t_expert/expert',
      name: "exp",
      component: exp
    },
    {
      path: '/my/MyView/msg',
      name: "Msg",
      component: Msg,
      redirect: "/my/MyView/msg/pinglun",
      children: [
        {
          path: 'pinglun',
          name: 'Pinglun',
          component: Pinglun
        },
        {
          path: 'tongzhi',
          name: 'Tongzhi',
          component: Tongzhi
        },
        {
          path: 'sixin',
          name: 'Sixin',
          component: Sixin
        }
      ]
    },
    {
      path: '/expert/mycir',
      name: "CirMyCir",
      component: CirMyCir
    },
      {
      path: '/expert/mycir/white',
      name: "CirToWrite",
      component: CirToWrite
    },
    {

      path: '/my/MyView/myshoucang',
      name: "Myshoucang",
      component: Myshoucang
    },
    {
      path: '/my/MyView/mydingdan/mydingdan',
      name: "Mydan",
      component: Mydan
    },
    {
      path: '/my/MyView/money/mymoney',
      name: "Mymon",
      component: Mymon
    },
    {
      path: '/my/MyView/shezhi/myshezhi',
      name: "Myshezhi",
      component: Myshezhi
    },
    {
      path: '/my/MyView/inter/myinter',
      name: "Myinter",
      component: Myinter
    },
    {
      path: '/my/MyView/user/myusers',
      name: "Myuser",
      component: Myuser
    },
    {
      path: '/my/MyView/blocks/myblock',
      name: "Myblock",
      component: Myblock
    },
      {
        path:'/amuse/book/delivery/details',
        name:"AmuseDetails ",
        component:AmuseDetails
      },
      {
        path:'/amuse/game/gameDelivery',
        name:"gameDelivery ",
        component:gameDelivery
      },
      {
        path:'/amuse/game/gameDelivery/gameDetails',
        name:"gameDetails ",
        component:gameDetails
      },
      {
        path:'/amuse/music/musicDelivery',
        name:"musicDelivery ",
        component:musicDelivery
      },
      {
        path:'/amuse/music/musicDelivery/musicDetails',
        name:"musicDetails ",
        component:musicDetails
      },
      {
        path:'/amuse/movie/movieDelivery',
        name:"movieDelivery ",
        component:movieDelivery
      },
      {
        path:'/amuse/movie/movieDelivery/movieDetails',
        name:"movieDetails ",
        component:movieDetails
      },
      {
        path:'/t_advice/adtopic',
        name:"Adtopic",
        component:Adtopic
      }
  ]
})

