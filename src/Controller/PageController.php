<?php

namespace App\Controller;

use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PageController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $response = new Response();
        if($request->isXmlHttpRequest()){
            $nom = $request->get('nom');
            $phone = $request->get('phone');
            $mail = $request->get('mail');
            $message = $request->get('message');
            $data = "";
            $nameError = "";
            $mailError = "";
            // if (!preg_match("/^[a-zA-Z0-9-' ]*$/", $nom)) {
            //     $nameError = "Seulement, des lettres, chiffres, '`-_/' sont autorisés pour un champ nom";
            // }

            // if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            //     $mailError = "Invalid email format " . $mail;
            // }

            // if($mailError !=""){
            //     $data = $mailError;
            // }

            // if($nameError !=""){
            //     $data = $nameError;
            // }

            if($nameError !="" && $mailError != ""){
                $data = "'Mail' non valide et 'Nom' nom valide";
            }
            
            else if($nameError == "" && $mailError =="" && $message !=""){
                // send mail

                $email = (new Email())
                    ->from($mail)
                    ->to('fandrianarisata2@gmail.com')
                    ->subject('Mail venant de mon site')
                    ->text($message);

                $mailer->send($email);

                $data = json_encode("ok"); // formater le résultat de la requête en json
                
            }

            $response->headers->set('Content-Type', 'application/json');
            $response->setContent($data);
            return $response;

        }
        return $this->render('page/home.html.twig');
    }
}
