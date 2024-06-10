// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { IRootState } from '../../store';
// import { toggleRTL, toggleTheme, toggleSidebar, setCrmToken, setUserData } from '../../store/themeConfigSlice';
// import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import Dropdown from '../Dropdown';
// import { LuLayoutDashboard } from 'react-icons/lu';
// import { MdOutlineRestaurant } from 'react-icons/md';
// import { RiAdminLine } from 'react-icons/ri';
// import { MdPayment } from 'react-icons/md';
// import { IoMdSettings } from 'react-icons/io';
// import { ImPriceTag } from 'react-icons/im';
// import { IoNotifications } from 'react-icons/io5';
// import { BsFillFileEarmarkRuledFill } from 'react-icons/bs';
// import { MdFeaturedPlayList } from 'react-icons/md';
// import { IoIosArrowDown } from "react-icons/io";

// const Header = () => {
//     const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);
//     const userData = useSelector((state: IRootState) => state.themeConfig.userData);
//     const crmData = useSelector((state: IRootState) => state.themeConfig.crmData);
//     const permissions = useSelector((state: IRootState) => state.themeConfig.permissions);

//     console.log(permissions)
//     const [isOpen, setIsOpen] = useState('')
//     const navigate = useNavigate();
//     const location = useLocation();
//     useEffect(() => {
//         // const a=   document.querySelector('button.active');
//         // if(a){
//         //     a.classList.remove('active')
//         // }
//         // const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]')?.firstChild;
//         // console.log("selecter", selector)

//         // // if (selector) {
//         //     selector.classList.add('active');
//         //     console.log("selecter", selector)

//         //     // for (let i = 0; i < all.length; i++) {
//         //     //     all[0]?.classList.remove('active');
//         //     // }

//         // // }
//     }, [location]);

//     const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

//     const themeConfig = useSelector((state: IRootState) => state.themeConfig);
//     const dispatch = useDispatch();

//     function createMarkup(messages: any) {
//         return { __html: messages };
//     }
//     const [messages, setMessages] = useState([

//     ]);

//     // const removeMessage = (value: number) => {
//     //     setMessages(messages.filter((user) => user.id !== value));
//     // };

//     const [notifications, setNotifications] = useState([

//     ]);

//     // const removeNotification = (value: number) => {
//     //     setNotifications(notifications.filter((user) => user.id !== value));
//     // };

//     const [search, setSearch] = useState(false);

//     const setLocale = (flag: string) => {
//         setFlag(flag);
//         if (flag.toLowerCase() === 'ae') {
//             dispatch(toggleRTL('rtl'));
//         } else {
//             dispatch(toggleRTL('ltr'));
//         }
//     };
//     const [flag, setFlag] = useState(themeConfig.locale);

//     const { t } = useTranslation();

//     const logout = () => {
//         dispatch(setCrmToken(''))
//         dispatch(setUserData(''))
//     }

//     useEffect(() => {
//         if (!crmToken) navigate('/login')
//     }, [crmToken])

//     const toggleSubMenu = () => {

//     }
//     return (
//         <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
//             <div className="shadow-sm">
//                 <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
//                     <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
//                         <Link to="/" className="main-logo flex items-center shrink-0" style={{ maxWidth: "100px" }}>
//                             <img className="ltr:-ml-1 rtl:-mr-1 inline" src={LOGO} alt="logo" />
//                         </Link>
//                         <button
//                             type="button"
//                             className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
//                             onClick={() => {
//                                 dispatch(toggleSidebar());
//                             }}
//                         >
//                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                 <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                 <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                             </svg>
//                         </button>
//                     </div>


//                     <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
//                         <div className="sm:ltr:mr-auto sm:rtl:ml-auto">

//                         </div>
//                         <div>
//                             {themeConfig.theme === 'light' ? (
//                                 <button
//                                     className={`${themeConfig.theme === 'light' &&
//                                         'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
//                                         }`}
//                                     onClick={() => {
//                                         dispatch(toggleTheme('dark'));
//                                     }}
//                                 >
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
//                                         <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path d="M4 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path d="M22 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                     </svg>
//                                 </button>
//                             ) : (
//                                 ''
//                             )}
//                             {themeConfig.theme === 'dark' && (
//                                 <button
//                                     className={`${themeConfig.theme === 'dark' &&
//                                         'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
//                                         }`}
//                                     onClick={() => {
//                                         dispatch(toggleTheme('light'));
//                                     }}
//                                 >
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path
//                                             d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
//                                             fill="currentColor"
//                                         />
//                                     </svg>
//                                 </button>
//                             )}

//                         </div>

//                         <div className="dropdown shrink-0 flex">
//                             <Dropdown
//                                 offset={[0, 8]}
//                                 placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
//                                 btnClassName="relative group block"
//                                 button={<img className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src={`https://ui-avatars.com/api/?background=000&color=fff&name=${userData?.name}`} alt="userProfile" />}
//                             >
//                                 <ul className="text-dark dark:text-white-dark !py-0 w-[300px] font-semibold dark:text-white-light/90">
//                                     <li>
//                                         <div className="flex items-center px-4 py-4">
//                                             <img className="rounded-md w-10 h-10 object-cover" src={`https://ui-avatars.com/api/?background=000&color=fff&name=${userData?.name}`} alt="userProfile" />
//                                             <div className="ltr:pl-4 rtl:pr-4 truncate">
//                                                 <h4 className="text-base">
//                                                     {userData?.name}
//                                                 </h4>
//                                                 <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
//                                                     {userData?.email}
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <Link to="/profile" className="dark:hover:text-white">
//                                             <svg className="ltr:mr-2 rtl:ml-2 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
//                                                 <path
//                                                     opacity="0.5"
//                                                     d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
//                                                     stroke="currentColor"
//                                                     strokeWidth="1.5"
//                                                 />
//                                             </svg>
//                                             Profile
//                                         </Link>
//                                     </li>


//                                     <li className="border-t border-white-light dark:border-white-light/10">
//                                         <button className="text-danger !py-3" onClick={() => logout()}>
//                                             <svg className="ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <path
//                                                     opacity="0.5"
//                                                     d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
//                                                     stroke="currentColor"
//                                                     strokeWidth="1.5"
//                                                     strokeLinecap="round"
//                                                 />
//                                                 <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                             </svg>
//                                             Sign Out
//                                         </button>
//                                     </li>
//                                 </ul>
//                             </Dropdown>
//                         </div>
//                     </div>

//                 </div>


//                 {/* horizontal menu */}
//                 <div className="">
//                     <ul className="horizontal-menu   hidden py-1.5 font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-black text-black dark:text-white-dark">


//                         <li className="menu nav-item relative  ">
//                             <NavLink to='/'>
//                                 <button type="button" className=" p-2 rounded focus:ring-violet-300 focus:bg-[#eee] ">
//                                     <div className="flex items-center">
//                                         <LuLayoutDashboard />
//                                         <span className="px-1">{t('Dashboard')}</span>
//                                     </div>
//                                 </button>
//                             </NavLink>

//                         </li>
//                         {permissions?.restaurant?.view ? (
//                             <li className="menu nav-item relative   ">
//                                 <NavLink to='/restaurants'>
//                                     <button type="button" className=" p-2 rounded focus:ring-violet-300 focus:bg-[#eee]  ">
//                                         <div className="flex items-center">
//                                             <MdOutlineRestaurant />
//                                             <span className="px-1">{t('Restaurant')}</span>
//                                         </div>
//                                     </button>
//                                 </NavLink>

//                             </li>) :


//                             ''}
//                         {/* <li>
//                             <button className="bg-red-500  focus:ring-violet-300 focus:text-white ">
//                                 Save 1
//                             </button>
//                         </li>
//                         <li>
//                             <button className="bg-red-500  focus:ring-violet-300 focus:text-blue-200 ">
//                                 Save 2
//                             </button>

//                         </li> */}

//                         {permissions?.authorization?.view ? (<li className="menu nav-item relative">
//                             <NavLink to='/authorization'>
//                                 <button type="button" className=" p-2 rounded focus:ring-violet-300 focus:bg-[#eee] ">
//                                     <div className="flex items-center">
//                                         <RiAdminLine />
//                                         <span className="px-1">{t('Authorizations')}</span>
//                                     </div>
//                                 </button>
//                             </NavLink>
//                         </li>) : ''}


//                         {permissions?.packages?.view ? (<li className="menu nav-item relative">
//                             <NavLink to="/pricing">
//                                 <button type="button" className=" p-2 rounded focus:ring-violet-300 focus:bg-[#eee] ">
//                                     <div className="flex items-center">
//                                         <ImPriceTag />
//                                         <span className="px-1">{t('Packages')}</span>
//                                     </div>
//                                 </button>
//                             </NavLink>
//                         </li>) : ''}


//                         {permissions?.payments?.view ? (<li className="menu nav-item relative">
//                             <NavLink to='/payments' >
//                                 <button type="button" className=" p-2 rounded focus:ring-violet-300 focus:bg-[#eee] ">
//                                     <div className="flex items-center">
//                                         <MdPayment />
//                                         <span className="px-1">{t('Payments')}</span>
//                                     </div>
//                                 </button></NavLink>
//                         </li>) : ''}



//                         <li className="menu nav-item relative">
//                             <NavLink to="/settings">
//                                 <button type="button" className=" p-2 rounded focus:ring-violet-300 focus:bg-[#eee] ">
//                                     <div className="flex items-center">
//                                         <IoNotifications />
//                                         <span className="px-1">Settings</span>
//                                     </div>
//                                 </button>
//                             </NavLink>
//                         </li>

//                     </ul>
//                 </div>


//             </div>
//         </header >
//     );
// };

// export default Header;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { IRootState } from '../../store';
// import { toggleRTL, toggleTheme, toggleSidebar, setCrmToken, setUserData } from '../../store/themeConfigSlice';
// import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import Dropdown from '../Dropdown';
// import { LuLayoutDashboard } from 'react-icons/lu';
// import { MdOutlineRestaurant } from 'react-icons/md';
// import { RiAdminLine } from 'react-icons/ri';
// import { MdPayment } from 'react-icons/md';
// import { IoMdSettings } from 'react-icons/io';
// import { ImPriceTag } from 'react-icons/im';
// import { IoNotifications } from 'react-icons/io5';
// import { BsFillFileEarmarkRuledFill } from 'react-icons/bs';
// import { MdFeaturedPlayList } from 'react-icons/md';
// import { IoIosArrowDown } from "react-icons/io";

// const Header = () => {
//     const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);
//     const userData = useSelector((state: IRootState) => state.themeConfig.userData);
//     const crmData = useSelector((state: IRootState) => state.themeConfig.crmData);
//     const permissions = useSelector((state: IRootState) => state.themeConfig.permissions);

//     console.log(permissions)
//     const [isOpen, setIsOpen] = useState('')
//     const navigate = useNavigate();
//     const location = useLocation();
//     useEffect(() => {
//         // const a=   document.querySelector('button.active');
//         // if(a){
//         //     a.classList.remove('active')
//         // }
//         // const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]')?.firstChild;
//         // console.log("selecter", selector)

//         // // if (selector) {
//         //     selector.classList.add('active');
//         //     console.log("selecter", selector)

//         //     // for (let i = 0; i < all.length; i++) {
//         //     //     all[0]?.classList.remove('active');
//         //     // }

//         // // }
//     }, [location]);

//     const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

//     const themeConfig = useSelector((state: IRootState) => state.themeConfig);
//     const dispatch = useDispatch();

//     function createMarkup(messages: any) {
//         return { __html: messages };
//     }
//     const [messages, setMessages] = useState([

//     ]);

//     // const removeMessage = (value: number) => {
//     //     setMessages(messages.filter((user) => user.id !== value));
//     // };

//     const [notifications, setNotifications] = useState([

//     ]);

//     // const removeNotification = (value: number) => {
//     //     setNotifications(notifications.filter((user) => user.id !== value));
//     // };

//     const [search, setSearch] = useState(false);

//     const setLocale = (flag: string) => {
//         setFlag(flag);
//         if (flag.toLowerCase() === 'ae') {
//             dispatch(toggleRTL('rtl'));
//         } else {
//             dispatch(toggleRTL('ltr'));
//         }
//     };
//     const [flag, setFlag] = useState(themeConfig.locale);

//     const { t } = useTranslation();

//     const logout = () => {
//         dispatch(setCrmToken(''))
//         dispatch(setUserData(''))
//     }

//     useEffect(() => {
//         if (!crmToken) navigate('/login')
//     }, [crmToken])

//     const toggleSubMenu = () => {

//     }
//     return (
//         <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
//             <div className="shadow-sm">
//                 <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
//                     <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
//                         <Link to="/" className="main-logo flex items-center shrink-0" style={{ maxWidth: "100px" }}>
//                             <img className="ltr:-ml-1 rtl:-mr-1 inline" src={LOGO} alt="logo" />
//                         </Link>
//                         <button
//                             type="button"
//                             className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
//                             onClick={() => {
//                                 dispatch(toggleSidebar());
//                             }}
//                         >
//                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                 <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                 <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                             </svg>
//                         </button>
//                     </div>


//                     <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
//                         <div className="sm:ltr:mr-auto sm:rtl:ml-auto">

//                         </div>
//                         <div>
//                             {themeConfig.theme === 'light' ? (
//                                 <button
//                                     className={`${themeConfig.theme === 'light' &&
//                                         'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
//                                         }`}
//                                     onClick={() => {
//                                         dispatch(toggleTheme('dark'));
//                                     }}
//                                 >
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
//                                         <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path d="M4 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path d="M22 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                         <path opacity="0.5" d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                                     </svg>
//                                 </button>
//                             ) : (
//                                 ''
//                             )}
//                             {themeConfig.theme === 'dark' && (
//                                 <button
//                                     className={`${themeConfig.theme === 'dark' &&
//                                         'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
//                                         }`}
//                                     onClick={() => {
//                                         dispatch(toggleTheme('light'));
//                                     }}
//                                 >
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path
//                                             d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
//                                             fill="currentColor"
//                                         />
//                                     </svg>
//                                 </button>
//                             )}

//                         </div>

//                         <div className="dropdown shrink-0 flex">
//                             <Dropdown
//                                 offset={[0, 8]}
//                                 placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
//                                 btnClassName="relative group block"
//                                 button={<img className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src={`https://ui-avatars.com/api/?background=000&color=fff&name=${userData?.name}`} alt="userProfile" />}
//                             >
//                                 <ul className="text-dark dark:text-white-dark !py-0 w-[300px] font-semibold dark:text-white-light/90">
//                                     <li>
//                                         <div className="flex items-center px-4 py-4">
//                                             <img className="rounded-md w-10 h-10 object-cover" src={`https://ui-avatars.com/api/?background=000&color=fff&name=${userData?.name}`} alt="userProfile" />
//                                             <div className="ltr:pl-4 rtl:pr-4 truncate">
//                                                 <h4 className="text-base">
//                                                     {userData?.name}
//                                                 </h4>
//                                                 <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
//                                                     {userData?.email}
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <Link to="/profile" className="dark:hover:text-white">
//                                             <svg className="ltr:mr-2 rtl:ml-2 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
//                                                 <path
//                                                     opacity="0.5"
//                                                     d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
//                                                     stroke="currentColor"
//                                                     strokeWidth="1.5"
//                                                 />
//                                             </svg>
//                                             Profile
//                                         </Link>
//                                     </li>


//                                     <li className="border-t border-white-light dark:border-white-light/10">
//                                         <button className="text-danger !py-3" onClick={() => logout()}>
//                                             <svg className="ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <path
//                                                     opacity="0.5"
//                                                     d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
//                                                     stroke="currentColor"
//                                                     strokeWidth="1.5"
//                                                     strokeLinecap="round"
//                                                 />
//                                                 <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                             </svg>
//                                             Sign Out
//                                         </button>
//                                     </li>
//                                 </ul>
//                             </Dropdown>
//                         </div>
//                     </div>

//                 </div>


//                 {/* horizontal menu */}
//                 <div className="">
//                     <ul className="horizontal-menu   hidden py-1.5 font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-black text-black dark:text-white-dark">


//                         <li className="menu nav-item relative  ">
//                             <NavLink to='/'>
//                                 <button type="button" className="nav-link">
//                                     <div className="flex items-center">
//                                         <LuLayoutDashboard />
//                                         <span className="px-1">{t('Dashboard')}</span>
//                                     </div>
//                                 </button>
//                             </NavLink>

//                         </li>
//                         {permissions?.restaurant?.view ? (
//                             <li className="menu nav-item relative   ">
//                                 <NavLink to='/restaurants'>
//                                     <button type="button" className="  focus:ring-violet-300 focus:bg-pink-400 active:bg-pink-400 ">
//                                         <div className="flex items-center">
//                                             <MdOutlineRestaurant />
//                                             <span className="px-1">{t('Restaurant')}</span>
//                                         </div>
//                                     </button>
//                                 </NavLink>

//                             </li>) :


//                             ''}
//                         <li>
//                             <button className="bg-red-500  focus:ring-violet-300 focus:text-white ">
//                                 Save 1
//                             </button>
//                         </li>
//                         <li>
//                             <button className="bg-red-500  focus:ring-violet-300 focus:text-blue-200 ">
//                                 Save 2
//                             </button>

//                         </li>

//                         {permissions?.authorization?.view ? (<li className="menu nav-item relative">
//                             <NavLink to='/authorization'>
//                                 <button type="button" className="nav-link">
//                                     <div className="flex items-center">
//                                         <RiAdminLine />
//                                         <span className="px-1">{t('Authorizations')}</span>
//                                     </div>
//                                 </button>
//                             </NavLink>
//                         </li>) : ''}


//                         {permissions?.packages?.view ? (<li className="menu nav-item relative">
//                             <NavLink to="/pricing">
//                                 <button type="button" className="nav-link">
//                                     <div className="flex items-center">
//                                         <ImPriceTag />
//                                         <span className="px-1">{t('Packages')}</span>
//                                     </div>
//                                 </button>
//                             </NavLink>
//                         </li>) : ''}


//                         {permissions?.payments?.view ? (<li className="menu nav-item relative">
//                             <NavLink to='/payments' >
//                                 <button type="button" className="nav-link">
//                                     <div className="flex items-center">
//                                         <MdPayment />
//                                         <span className="px-1">{t('Payments')}</span>
//                                     </div>
//                                 </button></NavLink>
//                         </li>) : ''}



//                         <li className="menu nav-item relative">
//                             <NavLink to="/settings">
//                                 <button type="button" className="nav-link">
//                                     <div className="flex items-center">
//                                         <IoNotifications />
//                                         <span className="px-1">Settings</span>
//                                     </div>
//                                 </button>
//                             </NavLink>
//                         </li>

//                     </ul>
//                 </div>


//             </div>
//         </header >
//     );
// };

// export default Header;
