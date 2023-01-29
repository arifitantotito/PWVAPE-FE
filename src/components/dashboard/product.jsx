import React from "react";

export default function Product() {
	return (
		<>
			<div className="border-b-2 pl-5 h-10 pt-[6px]">Product</div>
			<div className="px-5 py-5 grid grid-cols-1 gap-12 mx-3 md:grid-cols-2 xl:grid-cols-4">
				<div className="flex flex-col justify-between w-full max-w-xs h-96 max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<div className="px-8">
						<img
							className="py-4 rounded-t-lg"
							src="/docs/images/products/apple-watch.png"
							alt="productImage"
						/>
						<div className="py-2">
							<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
								Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
							</h5>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-3xl font-bold text-gray-900 dark:text-white">
								$599
							</span>
						</div>
					</div>
					<div className="px-5 pb-5 flex justify-end">
						<button className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
							Delete
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-between w-full max-w-sm h-96 max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
				<div className="flex flex-col justify-between w-full max-w-sm h-96 max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
				<div className="flex flex-col justify-between w-full max-w-sm h-96 max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
				<div className="flex flex-col justify-between w-full max-w-sm h-96 max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
			</div>
		</>
	);
}
