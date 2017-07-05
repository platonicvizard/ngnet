namespace dotnetWeb.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.IO;

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var fileName = "wwwroot\\index.html";
            var contentType = "text/html";

            string filePath = Path.Combine(Directory.GetCurrentDirectory(), fileName);
            string fileContents = System.IO.File.ReadAllText(filePath);

            return Content(fileContents, contentType);
        }

        //public IActionResult Error()
        //{
        //    return ActionResult();
        //}
        }
}
