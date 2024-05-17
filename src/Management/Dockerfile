FROM mcr.microsoft.com/dotnet/sdk:8.0 as build
WORKDIR /app

EXPOSE 80

COPY StudentManagement.sln StudentManagement.sln
COPY src/Management/Management.csproj src/Management/Management.csproj

RUN dotnet restore StudentManagement.sln

COPY src/Management/ src/Management/
WORKDIR /app/src/Management
RUN dotnet publish -c Release -o /app/src/out


FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/src/out .
ENTRYPOINT ["dotnet", "Management.dll"]