

const Register = () => {
    return (
        <div className="min-w-screen min-h-screen bg-[#2c1fa5] flex justify-center items-center">
            <div className="w-[350px] text-[#ffffff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
                    <p className="text-sm mb-3 font-medium">Please register your account</p>
                </div>

            <form action="">
                <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="name">Name</label>
                    <input className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md" type="text" name="name" placeholder="Name" id="name" required />
                </div>
            </form>

            </div>
        </div>
    );
};

export default Register;