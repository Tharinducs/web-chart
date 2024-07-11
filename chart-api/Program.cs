var AllowOrigin = "_allowAll";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowOrigin, builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddControllers();
builder.Services.AddLogging();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable CORS middleware
app.UseCors(AllowOrigin);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


