import { Box, Typography, Container, Paper, Divider, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const CONTACT_EMAIL = "hugo.varloud@gmail.com";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  backgroundColor: "var(--color-card)",
  color: "var(--color-text)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  border: "1px solid var(--color-border)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
}));

const SectionTitle = ({ children }) => (
  <Typography
    variant="h4"
    gutterBottom
    sx={{
      color: "var(--color-text)",
      mb: 3,
      fontSize: { xs: "1.1rem", sm: "1.25rem" },
    }}
  >
    {children}
  </Typography>
);

const Body = ({ children }) => (
  <Typography paragraph sx={{ lineHeight: 1.8, color: "var(--color-text)" }}>
    {children}
  </Typography>
);

const Confidentialite = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const p = `${lang}.Legal.Privacy`;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: "calc(var(--header-height) + 24px)",
            pb: 4,
            px: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--color-text)",
              mb: 2,
              fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" },
              lineHeight: 1.35,
              maxWidth: "100%",
            }}
          >
            {t(`${p}.title`)}
          </Typography>

          <StyledPaper elevation={3}>
            <Body>{t(`${p}.intro`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.publisherTitle`)}</SectionTitle>
            <Body>
              {t(`${p}.publisherLine1`)}
              <strong>{t(`${p}.publisherName`)}</strong>
              {t(`${p}.publisherLine2`)}
              <strong>
                <Link href={`mailto:${CONTACT_EMAIL}`} color="inherit">
                  {CONTACT_EMAIL}
                </Link>
              </strong>
              . {t(`${p}.publisherLine3`)}
            </Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.dataProcessedTitle`)}</SectionTitle>
            <Body>{t(`${p}.dataProcessedIntro`)}</Body>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                <strong>{t(`${p}.dataProcessed_li1_label`)}</strong>
                {t(`${p}.dataProcessed_li1_rest`)}
              </Typography>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                <strong>{t(`${p}.dataProcessed_li2_label`)}</strong>
                {t(`${p}.dataProcessed_li2_rest`)}
              </Typography>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                <strong>{t(`${p}.dataProcessed_li3_label`)}</strong>
                {t(`${p}.dataProcessed_li3_rest`)}
              </Typography>
            </Box>
            <Body>{t(`${p}.dataProcessed_footer`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.healthTitle`)}</SectionTitle>
            <Body>{t(`${p}.healthBody1`)}</Body>
            <Body>{t(`${p}.healthBody2`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.permissionsTitle`)}</SectionTitle>
            <Body>{t(`${p}.permissionsIntro`)}</Body>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                {t(`${p}.permissions_li1`)}
              </Typography>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                {t(`${p}.permissions_li2`)}
              </Typography>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                {t(`${p}.permissions_li3`)}
              </Typography>
            </Box>
            <Body>{t(`${p}.permissions_footer`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.retentionTitle`)}</SectionTitle>
            <Body>{t(`${p}.retentionBody1`)}</Body>
            <Body>{t(`${p}.retentionBody2`)}</Body>
            <Body>{t(`${p}.retentionBody3`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.deletionTitle`)}</SectionTitle>
            <Body>{t(`${p}.deletionIntro`)}</Body>
            <Box
              component="blockquote"
              sx={{
                borderLeft: "4px solid var(--color-border)",
                pl: 2,
                my: 2,
                color: "var(--color-text)",
              }}
            >
              <Typography sx={{ lineHeight: 1.8 }}>{t(`${p}.deletionPath`)}</Typography>
            </Box>
            <Body>{t(`${p}.deletionBody1`)}</Body>
            <Body>
              {t(`${p}.deletionBody2_before`)}
              <Link href={`mailto:${CONTACT_EMAIL}`} color="inherit" fontWeight={600}>
                {CONTACT_EMAIL}
              </Link>
              {". "}
              {t(`${p}.deletionBody2_after`)}
            </Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.googlePlayTitle`)}</SectionTitle>
            <Body>{t(`${p}.googlePlayIntro`)}</Body>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "var(--color-accent)" }}
                >
                  {t(`${p}.googlePrivacyLinkLabel`)}
                </Link>
              </Typography>
              <Typography
                component="li"
                sx={{ lineHeight: 1.8, color: "var(--color-text)", mb: 1 }}
              >
                <Link
                  href="https://support.google.com/googleplay/answer/2479637"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "var(--color-accent)" }}
                >
                  {t(`${p}.googlePlayRulesLinkLabel`)}
                </Link>
              </Typography>
            </Box>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.updatesTitle`)}</SectionTitle>
            <Body>{t(`${p}.updatesBody`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.contactTitle`)}</SectionTitle>
            <Body>
              {t(`${p}.contactBefore`)}{" "}
              <Link href={`mailto:${CONTACT_EMAIL}`} color="inherit" fontWeight={600}>
                {CONTACT_EMAIL}
              </Link>
            </Body>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: "var(--color-text-secondary)",
                mt: 4,
              }}
            >
              {t(`${p}.lastUpdated`)}
            </Typography>
          </StyledPaper>
        </Box>
      </Container>
    </Box>
  );
};

export default Confidentialite;
