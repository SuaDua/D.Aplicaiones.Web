using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

internal class Programa
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // Datos de estrenos organizados por d�a de la semana
var aplicacion = builder.Build();

// Datos de estrenos organizados por d�a de la semana
var movieReleases = new Dictionary<string, List<object>>
{
    ["lunes"] = new List<object>
    {
        new { Id = 1, Title = "Avatar: El Camino del Agua", ReleaseDate = "2023-12-18", Genre = "Ciencia Ficci�n" },
        new { Id = 2, Title = "El Viaje de Chihiro", ReleaseDate = "2023-12-18", Genre = "Animaci�n" }
    },
    ["martes"] = new List<object>
    {
        new { Id = 3, Title = "Spider-Man: Cruzando el Multiverso", ReleaseDate = "2023-12-19", Genre = "Animaci�n" },
        new { Id = 4, Title = "John Wick 4", ReleaseDate = "2023-12-19", Genre = "Acci�n" }
    },
    ["mi�rcoles"] = new List<object>
    {
        new { Id = 5, Title = "The Batman", ReleaseDate = "2023-12-20", Genre = "Acci�n" }
    },
    ["jueves"] = new List<object>
    {
        new { Id = 6, Title = "Oppenheimer", ReleaseDate = "2023-12-21", Genre = "Drama Hist�rico" },
        new { Id = 7, Title = "Soul", ReleaseDate = "2023-12-21", Genre = "Animaci�n" }
    },
    ["viernes"] = new List<object>
    {
        new { Id = 8, Title = "Dune: Parte Dos", ReleaseDate = "2023-12-22", Genre = "Ciencia Ficci�n" },
        new { Id = 9, Title = "Frozen 3", ReleaseDate = "2023-12-22", Genre = "Animaci�n" }
    },
    ["s�bado"] = new List<object>
    {
        new { Id = 10, Title = "El Rey Le�n", ReleaseDate = "2023-12-23", Genre = "Animaci�n" }
    },
    ["domingo"] = new List<object>
    {
        new { Id = 11, Title = "Avengers: Endgame", ReleaseDate = "2023-12-24", Genre = "Acci�n" }
    }
};

// Endpoint para devolver estrenos seg�n el d�a de la semana
app.MapGet("/api/movies/{day}", (string day) =>
{
    day = day.ToLower();
    if (movieReleases.ContainsKey(day))
    {
        return Results.Json(movieReleases[day]);
    }
    else
    {
        return Results.BadRequest(new { Message = "D�a no v�lido. Los d�as v�lidos son: lunes, martes, mi�rcoles, jueves, viernes, s�bado y domingo." });
    }
});

app.Run();