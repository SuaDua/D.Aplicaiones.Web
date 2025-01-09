using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

internal class Programa
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // Datos de estrenos organizados por día de la semana
var aplicacion = builder.Build();

// Datos de estrenos organizados por día de la semana
var movieReleases = new Dictionary<string, List<object>>
{
    ["lunes"] = new List<object>
    {
        new { Id = 1, Title = "Avatar: El Camino del Agua", ReleaseDate = "2023-12-18", Genre = "Ciencia Ficción" },
        new { Id = 2, Title = "El Viaje de Chihiro", ReleaseDate = "2023-12-18", Genre = "Animación" }
    },
    ["martes"] = new List<object>
    {
        new { Id = 3, Title = "Spider-Man: Cruzando el Multiverso", ReleaseDate = "2023-12-19", Genre = "Animación" },
        new { Id = 4, Title = "John Wick 4", ReleaseDate = "2023-12-19", Genre = "Acción" }
    },
    ["miércoles"] = new List<object>
    {
        new { Id = 5, Title = "The Batman", ReleaseDate = "2023-12-20", Genre = "Acción" }
    },
    ["jueves"] = new List<object>
    {
        new { Id = 6, Title = "Oppenheimer", ReleaseDate = "2023-12-21", Genre = "Drama Histórico" },
        new { Id = 7, Title = "Soul", ReleaseDate = "2023-12-21", Genre = "Animación" }
    },
    ["viernes"] = new List<object>
    {
        new { Id = 8, Title = "Dune: Parte Dos", ReleaseDate = "2023-12-22", Genre = "Ciencia Ficción" },
        new { Id = 9, Title = "Frozen 3", ReleaseDate = "2023-12-22", Genre = "Animación" }
    },
    ["sábado"] = new List<object>
    {
        new { Id = 10, Title = "El Rey León", ReleaseDate = "2023-12-23", Genre = "Animación" }
    },
    ["domingo"] = new List<object>
    {
        new { Id = 11, Title = "Avengers: Endgame", ReleaseDate = "2023-12-24", Genre = "Acción" }
    }
};

// Endpoint para devolver estrenos según el día de la semana
app.MapGet("/api/movies/{day}", (string day) =>
{
    day = day.ToLower();
    if (movieReleases.ContainsKey(day))
    {
        return Results.Json(movieReleases[day]);
    }
    else
    {
        return Results.BadRequest(new { Message = "Día no válido. Los días válidos son: lunes, martes, miércoles, jueves, viernes, sábado y domingo." });
    }
});

app.Run();