const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);

        // Проверка за пътя
        if (url.pathname === "/fruits") {
            const fruits = [
                { name: "Apple", color: "Red" },
                { name: "Banana", color: "Yellow" },
                { name: "Orange", color: "Orange" }
            ];

            return new Response(JSON.stringify(fruits), {
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response("404 - Not Found", { status: 404 });
    },
});

console.log(`Bun сървърът работи на http://localhost:${server.port}`);
