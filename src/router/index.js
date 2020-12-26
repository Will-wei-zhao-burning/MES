import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("views/Login/Login.vue");
const Home = () => import("views/Home/Home.vue");

const ProofSingle = () => import("views/Home/Business/ProofSingle.vue");
const ProofGroup = () => import("views/Home/Business/ProofGroup.vue")
const Plan = () => import("views/Home/Business/Plan.vue");
const PlanL = () => import("views/Home/Business/Plan1.vue");
const Summary = () => import("views/Home/Business/Summary.vue")
const Average = ()=> import("views/Home/Business/Plan/Average.vue")
const MultiSize = ()=> import("views/Home/Business/Plan/MultiSize.vue")
const NewMulti = ()=> import("views/Home/Business/Plan/NewMulti.vue")
const NewAverage = ()=> import("views/Home/Business/Plan/NewAverage.vue")

const Hook = ()=> import("views/Home/Business/Hook.vue")
const PurchaseHook = ()=> import("views/Home/Business/PurchaseHook.vue")
const Box= ()=> import("views/Home/Business/Box.vue")
const PurchaseBox = ()=> import("views/Home/Business/PurchaseBox.vue")
const Tag = ()=> import("views/Home/Business/Tag.vue")
const PurchaseTag = ()=> import("views/Home/Business/PurchaseTag.vue")
const Mark =()=> import("views/Home/Business/Mark.vue")
const PurchaseMark =()=> import("views/Home/Business/PurchaseMark.vue")

const EnterStore = ()=>import("views/Home/Business/EnterStore.vue")
const NewEnterStore = ()=>import("views/Home/Business/NewEnterStore.vue")

const OrderStore = ()=>import("views/Home/Business/OrderStore.vue")
const NewOrderStore = ()=>import("views/Home/Business/NewOrderStore.vue")

const MonthBuget = ()=>import("views/Home/Business/MonthBuget.vue")

const ShippingPlan = ()=>import("views/Home/Business/ShippingPlan.vue")

const ShippingSummary = ()=>import("views/Home/Business/Shipping/ShippingSummary.vue")
const Batch = ()=>import("views/Home/Business/Shipping/Batch.vue")
const Employee = ()=>import("views/Home/Business/Shipping/Employee.vue")
const Manager = ()=>import("views/Home/Business/Shipping/Manager.vue")
const Total = ()=>import("views/Home/Business/Shipping/Total.vue")
const NewShipping = ()=>import("views/Home/Business/Shipping/NewShipping.vue")

const Information = () =>import("views/Home/Information/Information.vue")

const Technology = () =>import("views/Home/Technology/Technology.vue")

const Customer = () => import("views/Home/Authority/Customer.vue")
const Permission = () => import("views/Home/Authority/Permission.vue")
const User = () => import("views/Home/Authority/User.vue")


Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/proofSingle",
        name: "ProofSingle",
        component: ProofSingle,
      },
      {
        path: "/proofGroup",
        name: "ProofGroup",
        component: ProofGroup,
      },
      {
        path:"/plan",
        name:"Plan",
        component: Plan
      },
      {
        path:"/planL",
        name:"Plan",
        component: PlanL
      },
      {
        path:"/summary",
        name:"Summary",
        component: Summary
      },
      {
        path:"/average",
        name:"Average",
        component: Average
      },
      {
        path:"/multiSize",
        name:"MultiSize",
        component: MultiSize
      },
      {
        path:"/newMulti",
        name:"NewMulti",
        component: NewMulti
      },
      {
        path:"/newAverage",
        name:"NewAverage",
        component: NewAverage
      },
      {
        path:"/hook",
        name:"Hook",
        component: Hook
      },
      {
        path:"/purchaseHook",
        name:"PurchaseHook",
        component: PurchaseHook
      },
      {
        path:"/box",
        name:"Box",
        component: Box
      },
      {
        path:"/purchaseBox",
        name:"PurchaseBox",
        component: PurchaseBox
      },
      {
        path:"/tag",
        name:"Tag",
        component: Tag
      },
      {
        path:"/purchaseTag",
        name:"PurchaseTag",
        component: PurchaseTag
      },
      {
        path:"/mark",
        name:"Mark",
        component:Mark
      },
      {
        path:"/purchaseMark",
        name:"PurchaseMark",
        component: PurchaseMark
      },
      {
        path:"/enterStore",
        name:"EnterStore",
        component: EnterStore
      },
      {
        path:"/newEnterStore",
        name:"NewEnterStore",
        component: NewEnterStore
      },
      {
        path:"/orderStore",
        name:"OrderStore",
        component: OrderStore
      },
      {
        path:"/newOrderStore",
        name:"NewOrderStore",
        component: NewOrderStore
      },
      {
        path:"/monthBuget",
        name:"MonthBuget",
        component:MonthBuget
      },
      {
        path:"/shippingPlan",
        name:"ShippingPlan",
        component:ShippingPlan
      },
      {
        path:"/shippingSummary",
        name:"ShippingSummary",
        component:ShippingSummary
      },
      {
        path:"/batch",
        name:"Batch",
        component:Batch
      },
      {
        path:"/employee",
        name:"Employee",
        component:Employee
      },
      {
        path:"/manager",
        name:"Manager",
        component:Manager
      },
      {
        path:"/total",
        name:"Total",
        component:Total
      },
      {
        path:"/newShipping",
        name:"NewShipping",
        component:NewShipping
      },
      {
        path: "/information",
        name: "Information",
        component: Information,
      },
      {
        path: "/technology",
        name: "Technology",
        component: Technology,
      },
      {
        path:"/customer",
        name:"Customer",
        component: Customer,
      },
      {
        path:"/permission",
        name:"Permission",
        component: Permission,
      },
      {
        path:"/user",
        name:"User",
        component: User,
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
