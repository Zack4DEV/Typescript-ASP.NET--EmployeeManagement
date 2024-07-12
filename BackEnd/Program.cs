var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", builder =>
        {
            builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        });
    });

builder.Services.AddControllers();
builder.Services.AddRazorPages();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

    
var app = builder.Build();

if (app.Environment.IsDevelopment())
    {
    app.UseDeveloperExceptionPage();

    }
    else
    {
        app.UseExceptionHandler("/Error");
        app.UseHsts();
    }

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors("AllowAll");

app.UseAuthorization();

app.UseEndpoints(endpoints =>
    {
        endpoints.MapGet("/echo",
            context => context.Response.WriteAsync("echo"))
            .RequireCors(MyAllowSpecificOrigins);

        endpoints.MapControllers()
                 .RequireCors(MyAllowSpecificOrigins);

        endpoints.MapGet("/echo2",
            context => context.Response.WriteAsync("echo2"));

        endpoints.MapRazorPages();
    });

app.MapControllers();

app.Run();