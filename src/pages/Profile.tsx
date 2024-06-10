import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React,{ useEffect } from 'react';
import IconPencilPaper from '../components/Icon/IconPencilPaper';
import IconCoffee from '../components/Icon/IconCoffee';
import IconCalendar from '../components/Icon/IconCalendar';
import IconMapPin from '../components/Icon/IconMapPin';
import IconMail from '../components/Icon/IconMail';
import IconPhone from '../components/Icon/IconPhone';
import IconTwitter from '../components/Icon/IconTwitter';
import IconDribbble from '../components/Icon/IconDribbble';
import IconGithub from '../components/Icon/IconGithub';
import IconShoppingBag from '../components/Icon/IconShoppingBag';
import IconTag from '../components/Icon/IconTag';
import IconCreditCard from '../components/Icon/IconCreditCard';
import IconClock from '../components/Icon/IconClock';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import { setPageTitle } from '../store/themeConfigSlice';
import { IRootState } from '../store';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Profile'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    return (
        <div className='p-5'>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Users
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Profile</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                   
                    <div className="panel">
                        <div className="flex items-center justify-between mb-10">
                            <h5 className="font-semibold text-lg dark:text-white-light">Pro Plan</h5>
                            <button className="btn btn-primary">Continue </button>
                        </div>
                        <div className="group">
                            <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                <li>10,000 Monthly Visitors</li>
                                <li>Unlimited Reports</li>
                                <li>2 Years Data Storage</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4 font-semibold">
                                <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />5 Days Left
                                </p>
                                <p className="text-info">$25 / month</p>
                            </div>
                            <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                                <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="flex items-center justify-between mb-10">
                            <h5 className="font-semibold text-lg dark:text-white-light">Pro Plan</h5>
                            <button className="btn btn-primary">Continue</button>
                        </div>
                        <div className="group">
                            <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                <li>10,000 Monthly Visitors</li>
                                <li>Unlimited Reports</li>
                                <li>2 Years Data Storage</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4 font-semibold">
                                <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />5 Days Left
                                </p>
                                <p className="text-info">$25 / month</p>
                            </div>
                            <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                                <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="panel">
                        <div className="flex items-center justify-between mb-10">
                            <h5 className="font-semibold text-lg dark:text-white-light">Pro Plan</h5>
                            <button className="btn btn-primary">Continue</button>
                        </div>
                        <div className="group">
                            <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                <li>10,000 Monthly Visitors</li>
                                <li>Unlimited Reports</li>
                                <li>2 Years Data Storage</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4 font-semibold">
                                <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />5 Days Left
                                </p>
                                <p className="text-info">$25 / month</p>
                            </div>
                            <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                                <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="flex items-center justify-between mb-10">
                            <h5 className="font-semibold text-lg dark:text-white-light">Pro Plan</h5>
                            <button className="btn btn-primary">Continue</button>
                        </div>
                        <div className="group">
                            <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                <li>10,000 Monthly Visitors</li>
                                <li>Unlimited Reports</li>
                                <li>2 Years Data Storage</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4 font-semibold">
                                <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />5 Days Left
                                </p>
                                <p className="text-info">$25 / month</p>
                            </div>
                            <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                                <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Profile</h5>
                            <Link to="/users/user-account-settings" className="ltr:ml-auto rtl:mr-auto btn btn-primary p-2 rounded-full">
                                <IconPencilPaper />
                            </Link>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-col justify-center items-center">
                                <img src="/assets/images/profile-34.jpeg" alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                                <p className="font-semibold text-primary text-xl">Jimmy Turner</p>
                            </div>
                            <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                                <li className="flex items-center gap-2">
                                    <IconCoffee className="shrink-0" />
                                    Web Developer
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconCalendar className="shrink-0" />
                                    Jan 20, 1989
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconMapPin className="shrink-0" />
                                    New York, USA
                                </li>
                                <li>
                                    <button className="flex items-center gap-2">
                                        <IconMail className="w-5 h-5 shrink-0" />
                                        <span className="text-primary truncate">jimmy@gmail.com</span>
                                    </button>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconPhone />
                                    <span className="whitespace-nowrap" dir="ltr">
                                        +1 (530) 555-12121
                                    </span>
                                </li>
                            </ul>
                            <ul className="mt-7 flex items-center justify-center gap-2">
                                <li>
                                    <button className="btn btn-info flex items-center justify-center rounded-full w-10 h-10 p-0">
                                        <IconTwitter className="w-5 h-5" />
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-danger flex items-center justify-center rounded-full w-10 h-10 p-0">
                                        <IconDribbble />
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-dark flex items-center justify-center rounded-full w-10 h-10 p-0">
                                        <IconGithub />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="flex items-center justify-between mb-10">
                            <h5 className="font-semibold text-lg dark:text-white-light">Pro Plan</h5>
                            <button className="btn btn-primary">Renew Now</button>
                        </div>
                        <div className="group">
                            <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                <li>10,000 Monthly Visitors</li>
                                <li>Unlimited Reports</li>
                                <li>2 Years Data Storage</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4 font-semibold">
                                <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />5 Days Left
                                </p>
                                <p className="text-info">$25 / month</p>
                            </div>
                            <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                                <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Profile;
