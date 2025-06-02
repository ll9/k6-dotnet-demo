var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet(
    "/features",
    async () =>
    {
        await Task.Delay(10); // 10ms delay
        return "Features endpoint with 10ms delay";
    }
);

app.MapGet("/views", () => "Views endpoint");

app.Run();
