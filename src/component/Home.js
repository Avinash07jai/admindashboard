import React, { useCallback, useState, PureComponent } from "react";
import './Home.css';
import { PieChart, Pie, Sector } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsGraphUp } from "react-icons/bs";
import { RiCustomerService2Line, RiExchangeDollarLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];

const data1 = [
    {
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const data2 = [
    {
        uv: 1000,
        pv: 2400,
        amt: 2400,
    },
    {
        uv: 9000,
        pv: 1398,
        amt: 2210,
    }
];

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {value}
            </text>
        );
    }
}

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {payload.value}
                </text>
            </g>
        );
    }
}

const renderActiveShape = (Avinash) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = Avinash;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";



    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <>
            <div style={{ display: 'flex', marginLeft: 50, marginTop: 10 }}>
                <div className='introContainer'>
                    <div style={{ width: '30%' }}>
                        <p style={{ textAlign: 'start', color: 'white', marginLeft: 15 }}>Hy! Avinash</p>
                        <p style={{ textAlign: 'start', color: '#1BDCA2', marginLeft: 15, fontSize: 12 }}>You get a crazy growth</p>
                        <p style={{ textAlign: 'start', color: 'white', marginLeft: 15, fontSize: 13 }}> <span>$302k</span> Dollar</p>
                        <button style={{ paddingLeft: 25, paddingRight: 25, borderRadius: 10, backgroundColor: 'green', color: 'white', marginRight: '17%', borderColor: 'green', height: 28 }}>View</button>
                    </div>
                    <div style={{ width: '60%', marginTop: '-27%' }}>
                        <PieChart width={400} height={400}>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx={200}
                                cy={200}
                                innerRadius={35}
                                outerRadius={50}
                                fill="#8884d8"
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                            />
                        </PieChart>
                    </div>
                </div>
                <div className='itemsContainer'>
                    <p style={{ textAlign: 'start', marginLeft: 40, color: 'white' }}>Statistics</p>
                    <div style={{ display: 'flex' }}>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: 'black', borderRadius: '50%' }}>
                                <BsGraphUp size={23} style={{ color: 'white', marginTop: 7 }} />
                            </div>
                            <p style={{ color: 'white', marginLeft: 10 }}>Sales</p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 30 }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: 'black', borderRadius: '50%' }}>
                                <RiCustomerService2Line size={23} style={{ color: 'white', marginTop: 7 }} />
                            </div>
                            <p style={{ color: 'white', marginLeft: 10 }}>Customer</p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 30 }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: 'black', borderRadius: '50%' }}>
                                <MdProductionQuantityLimits size={23} style={{ color: 'white', marginTop: 7 }} />
                            </div>
                            <p style={{ color: 'white', marginLeft: 10 }}>Products</p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 30 }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: 'black', borderRadius: '50%' }}>
                                <RiExchangeDollarLine size={23} style={{ color: 'white', marginTop: 7 }} />
                            </div>
                            <p style={{ color: 'white', marginLeft: 10 }}>Revenue</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ width: '38%', marginLeft: 50, marginTop: 20 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1.4, height: '24vh', backgroundColor: '#283026', borderRadius: '10px' }}>
                            <p style={{ color: 'white' }}>Orders</p>
                            <p style={{ color: '#1BDCA2', fontSize: 13, marginTop: '-15px' }}>This Month total Orders</p>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={500}
                                    height={270}
                                    data={data2}
                                    margin={{
                                        top: 0,
                                        right: 10,
                                        left: 10,
                                        bottom: 25,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div style={{ flex: 2, height: '24vh', backgroundColor: '#283026', marginLeft: 10, marginRight: 20, borderRadius: '10px' }}>
                            <p style={{ color: 'white' }}>Sales</p>
                            <p style={{ color: '#1BDCA2', fontSize: 13, marginTop: '-15px' }}>This Month total Sales</p>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={500}
                                    height={270}
                                    data={data1}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 18,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div style={{ width: '410px', height: '25vh', backgroundColor: '#283026', marginTop: '20px', borderRadius: 10, display:'flex' }}>
                        <div style={{ width: '30%' }}>
                            <p style={{ textAlign: 'start', color: 'white', marginLeft: 15 }}>Earning </p>
                            <p style={{ textAlign: 'start', color: '#1BDCA2', marginLeft: 15, fontSize: 12, marginTop:40 }}>This month earnings</p>
                            <p style={{ textAlign: 'start', color: 'white', marginLeft: 15, fontSize: 13, marginTop:'-10px' }}> <span>$302k</span> Dollar</p>
                            <button style={{ paddingLeft: 25, paddingRight: 25, borderRadius: 10, backgroundColor: 'green', color: 'white', marginRight: '17%', borderColor: 'green', height: 28 }}>View</button>
                        </div>
                        <div style={{ width: '60%', marginTop: '-27%' }}>
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data}
                                    cx={200}
                                    cy={200}
                                    innerRadius={35}
                                    outerRadius={50}
                                    fill="#8884d8"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </div>
                    </div>
                </div>
                <div style={{ width: '54%', height: '53vh', backgroundColor: '#283026', marginTop: 20, borderRadius: 10 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data1}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 10,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </>
    )
}

export default Home;
