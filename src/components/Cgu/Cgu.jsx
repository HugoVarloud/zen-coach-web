import { Box, Typography, Container, Paper, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
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
    sx={{ color: "var(--color-text)", mb: 3, fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
  >
    {children}
  </Typography>
);

const Body = ({ children }) => (
  <Typography paragraph sx={{ lineHeight: 1.8, color: "var(--color-text)" }}>
    {children}
  </Typography>
);

const Cgu = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const p = `${lang}.Legal.Cgu`;

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
              <strong>{t(`${p}.publisherName`)}</strong>
              {" — "}
              {t(`${p}.publisherContact`)}{" "}
              <Link href={`mailto:${CONTACT_EMAIL}`} color="inherit" fontWeight={600}>
                {CONTACT_EMAIL}
              </Link>
              .
            </Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.serviceTitle`)}</SectionTitle>
            <Body>{t(`${p}.serviceBody`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.useTitle`)}</SectionTitle>
            <Body>{t(`${p}.useBody`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.ipTitle`)}</SectionTitle>
            <Body>{t(`${p}.ipBody`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.liabilityTitle`)}</SectionTitle>
            <Body>{t(`${p}.liabilityBody`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.dataTitle`)}</SectionTitle>
            <Body>
              {t(`${p}.dataBodyBefore`)}{" "}
              <Link
                component={RouterLink}
                to="/zen-coach-confidentialite"
                color="inherit"
                fontWeight={600}
                underline="always"
              >
                {t(`${p}.privacyPolicyLink`)}
              </Link>
              {t(`${p}.dataBodyAfter`) ? ` ${t(`${p}.dataBodyAfter`)}` : "."}
            </Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.changesTitle`)}</SectionTitle>
            <Body>{t(`${p}.changesBody`)}</Body>

            <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

            <SectionTitle>{t(`${p}.lawTitle`)}</SectionTitle>
            <Body>{t(`${p}.lawBody`)}</Body>
          </StyledPaper>
        </Box>
      </Container>
    </Box>
  );
};

export default Cgu;
